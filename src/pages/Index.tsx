import PasswordGenerator from "@/components/PasswordGenerator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="flex-1 flex items-center justify-center">
        <PasswordGenerator />
      </div>
      <footer className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/jonah-serna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Jonah Serna
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;