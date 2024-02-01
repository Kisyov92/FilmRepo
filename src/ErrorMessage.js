function ErrorMessage({ message }) {
  return (
    <p className="py-10 text-center text-3xl">
      {message}
      <span>💥</span>
    </p>
  );
}

export default ErrorMessage;
