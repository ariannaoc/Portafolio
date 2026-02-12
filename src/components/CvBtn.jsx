import { FileText } from "lucide-react";

function CvBtn() {
  const download = () => {
    const sharedLink =
      "https://drive.google.com/file/d/1WBXCGGfNX02Pja_k6ligVqczSZ1XoFc8/view?usp=drive_link";
    window.open(sharedLink, "_blank");
  };
  return (
    <>
      <button onClick={download} className="flex items-center space-x-4 bg-jade-400 dark:bg-jade-600 dark:text-bunker-50 p-4 font-semibold rounded-lg shadow-md w-full max-w-sm justify-center border border-bunker-700 hover:border-jade-500 transform hover:scale-105 transition-all duration-300">
      <FileText className="mr-2 inline-block" size={20} /> 
        Ver Curriculum Completo
      </button>
    </>
  );
}

export { CvBtn };
