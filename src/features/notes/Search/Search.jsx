export default function Search({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search notes..."
      className="w-full border px-3 py-2 rounded-md text-sm"
    />
  );
}
