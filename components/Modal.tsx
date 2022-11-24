import { useRef, useLayoutEffect, useMemo } from "react";
import ReactDOM from "react-dom";

import useClient from "@app/utils/useClient";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

function Modal(props: ModalProps) {
  const { isOpen, onClose, children } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const isClient = useClient();
  const body = document.body;

  useLayoutEffect(() => {
    if (!isClient) return;
    const handleBackdrop = (event: any) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
      // The node also contains itself, thus target on itself doesn't pass the condition.
      if (!containerRef.current?.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleBackdrop);

    return () => {
      document.removeEventListener("mousedown", handleBackdrop);
    }
  }, [containerRef, onClose, isClient]);

  const content = useMemo(() => {
    return isOpen && (
      <div className="fixed z-10 top-0 left-0 bg-[#000000]/50 w-full h-full">
        <div className="flex justify-center h-screen">
          <div
            ref={containerRef}
            className="m-auto rounded-md bg-white border border-gray">
            {children}
          </div>
        </div>
      </div>
    );
  }, [isOpen, children]);

  return isClient && body ? ReactDOM.createPortal(content, body) : null;
}

export default Modal;