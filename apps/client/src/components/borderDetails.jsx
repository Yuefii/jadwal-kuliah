const BorderDetails = ({ children }) => {
  return (
    <main>
      <div className="flex justify-center mt-2">
        <div className="w-full md:w-1/2 border border-blue-500 h-auto rounded-md">
          {children}
        </div>
      </div>
    </main>
  );
};

export default BorderDetails;
