import useCustomPointer from "./useCustomPointer";

export default function CustomPointer() {
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}
