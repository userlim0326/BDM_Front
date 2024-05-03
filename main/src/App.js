import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen bg-white p-5">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a className="text-2xl font-bold" href="#">
            <img
              alt="Logo"
              className="h-10"
              height="80"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="80"
            />
          </a>
          <a className="text-gray-700 text-lg" href="#">
            질병정보
          </a>
          <a className="text-gray-700 text-lg" href="#">
            도구 및 API
          </a>
          <a className="text-gray-700 text-lg" href="#">
            구독
          </a>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-blue-500 text-white px-6 py-3 text-lg">
            로그인
          </Button>
          <Button className="bg-gray-300 text-gray-700 px-6 py-3 text-lg">
            회원가입
          </Button>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex">
          <div className="flex flex-col flex-grow">
            <h1 className="text-4xl font-bold mb-4">
              생선의 상태를 분석하세요
            </h1>
            <p className="text-lg text-gray-700 mb-10">
              우리는 생선의 질병 여부를 정확하게 판별하는 데 도움을 주는
              혁신적인 웹사이트입니다. 최신 이미지 분석 기술과 방대한 질병
              데이터베이스를 활용하여, 여러분이 구매하려는 생선이 건강한지
              아닌지를 손쉽게 확인할 수 있습니다.
              <br />
              생선을 구매할 때, 겉모습만으로는 질병 여부를 판단하기 어려울 수
              있습니다. 하지만 '수상한 생선'을 이용하면, 간단히 생선 사진을
              업로드하는 것만으로도 내부적인 질병까지 정확하게 진단받을 수
              있습니다.
            </p>
          </div>
          <div className="w-96 ml-8">
            <label
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
              htmlFor="file-upload"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <CloudUploadIcon className="text-gray-500 w-12 h-12" />
                <span className="mt-2 text-base text-gray-500">
                  이미지 업로드
                </span>
                <span className="text-sm text-gray-400">또는 파일 놓기</span>
              </div>
              <input className="sr-only" id="file-upload" type="file" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function CloudUploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  );
}
