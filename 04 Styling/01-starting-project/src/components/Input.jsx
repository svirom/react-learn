export default function CustomInput({ label, invalid, ...props }) {
  let labelClasses = 'text-stone-300';
  let inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow';

  if (invalid) {
    labelClasses = 'text-red-400';
    inputClasses += ' text-red-500 bg-red-100 border-red-300';
  } else {
    inputClasses += ' text-gray-700 bg-stone-300';
  }

  return (
    <p>
      <label className={`block mb-2 text-xs font-bold tracking-wide uppercase ${labelClasses}`}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
