const BorderDetails = ({ children }) => {
  return (
    <main>
      <div className="flex justify-center mt-2">
        <div className="w-full md:w-1/2 border-2 border-blue-500 h-auto rounded-xl">
          {children}
        </div>
      </div>
    </main>
  );
};

export default BorderDetails;
