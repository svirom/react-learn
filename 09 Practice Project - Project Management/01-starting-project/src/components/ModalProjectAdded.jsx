import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ModalProjectAdded = forwardRef(function ModalProjectAdded(_, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="border-0 rounded-lg px-8 py-6 bg-slate-100 backdrop:bg-black/90"
    >
      <p className="text-xl font-semibold text-stone-800 mb-5">
        Project created
      </p>
      <form method="dialog" className="text-center">
        <button
          className="text-slate-200 py-2 px-6 rounded-md bg-slate-800"
        >
          OK
        </button>
      </form>
    </dialog>,
    document.getElementById('modal-root'),
  );
});

export default ModalProjectAdded;
