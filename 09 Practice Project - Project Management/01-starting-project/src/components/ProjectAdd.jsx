import { useRef } from 'react';

export default function ProjectAdd({ handleResetForm, handleSaveProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !title.current.value.trim() ||
      !description.current.value.trim() ||
      !date.current.value
    ) {
      return;
    }
    handleSaveProject({
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
    });
    title.current.value = '';
    description.current.value = '';
    date.current.value = '';
  }

  return (
    <form
      className="max-w-[37.5rem] py-10 ps-8"
      onReset={handleResetForm}
      onSubmit={handleSubmit}
    >
      <div className="flex justify-end gap-4">
        <button type="reset" className="text-stone-800 py-2 px-4 rounded-md">
          Cancel
        </button>
        <button
          type="submit"
          className="text-stone-200 py-2 px-5 rounded-md bg-stone-800"
        >
          Save
        </button>
      </div>
      <div className="grid pt-10 mb-6">
        <label
          htmlFor="title"
          className="text-stone-950 font-semibold uppercase mb-1"
        >
          Title
        </label>
        <input
          ref={title}
          type="text"
          id="title"
          className="border-b-2 border-b-stone-300 focus:border-b-stone-400 outline-none bg-stone-200 px-3 py-2"
        />
      </div>
      <div className="grid mb-6">
        <label
          htmlFor="description"
          className="text-stone-950 font-semibold uppercase mb-1"
        >
          Description
        </label>
        <textarea
          ref={description}
          id="description"
          className="border-b-2 border-b-stone-300 focus:border-b-stone-400 outline-none bg-stone-200 px-3 py-2"
        />
      </div>
      <div className="grid mb-6">
        <label
          htmlFor="date"
          className="text-stone-950 font-semibold uppercase mb-1"
        >
          Due date
        </label>
        <input
          ref={date}
          type="date"
          id="date"
          className="border-b-2 border-b-stone-300 focus:border-b-stone-400 outline-none bg-stone-200 px-3 py-2"
        />
      </div>
    </form>
  );
}
