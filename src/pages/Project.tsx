import { useTranslation } from "react-i18next"

// Single featured project with more details
const featuredProject = {
  title: "Ứng dụng Desktop Quản lý Kho Hàng",
  description:
    "Một ứng dụng máy tính được thiết kế để giúp doanh nghiệp theo dõi mức tồn kho một cách hiệu quả, quản lý luồng hàng và giám sát các giao dịch liên quan. Hệ thống hỗ trợ nhiều vai trò người dùng và cung cấp các báo cáo chi tiết để tối ưu hóa hoạt động kho hàng.",
  longDescription:
    "Ứng dụng Quản lý Kho của chúng tôi được phát triển với khả năng mở rộng và hiệu suất cao. Hệ thống cung cấp một phương pháp có cấu trúc để theo dõi hàng tồn kho, đảm bảo độ chính xác của số liệu và quy trình kho vận trơn tru. Ứng dụng bao gồm quản lý vai trò người dùng, xác thực bảo mật và các tính năng báo cáo toàn diện để hỗ trợ ra quyết định.",
  tech: ["Java", "JavaFX", "MySQL", "Spring Boot", "Hibernate", "Git"],
  features: [
    "Hỗ trợ vai trò nhiều người dùng",
    "Theo dõi tồn kho theo thời gian thực",
    "Quản lý nhập và xuất kho",
    "Lịch sử giao dịch chi tiết",
    "Hệ thống báo cáo toàn diện",
    "Xác thực bảo mật và kiểm soát truy cập",
  ],
  image: "/Introduce/WareHouse.avif",
  timeline: "6 tháng",
  client: "Giải pháp Logistics Doanh nghiệp",
}

export const ProjectPage = () => {
  const { t } = useTranslation()

  return (
    <div className="px-4 md:px-[148px] py-12">
      <h1 className="text-4xl font-bold mb-8">Dự án quản lý kho hàng</h1>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Project Image */}
        <div className="w-full h-[300px] md:h-[400px] relative">
          <img
            src={featuredProject.image || "/placeholder.svg"}
            alt={featuredProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
            {featuredProject.client}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            {/* Left Column - Main Info */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">{featuredProject.title}</h2>
              <p className="text-gray-700 text-lg mb-6">{featuredProject.description}</p>
              <p className="text-gray-600 mb-8">{featuredProject.longDescription}</p>

              <h3 className="text-xl font-semibold mb-4">Các tính năng chính</h3>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                {featuredProject.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Tech & Details */}
            <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Thời gian dự án</h3>
                <p className="text-gray-700">{featuredProject.timeline}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Khách hàng</h3>
                <p className="text-gray-700">{featuredProject.client}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Công nghệ được sử dụng</h3>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-gray-700">Bạn quan tâm đến một giải pháp tương tự cho doanh nghiệp của mình?</p>
              <a href="https://www.ecount.com/vn/?S=01&C=11768428526&K=115655127018&keyword=qu%E1%BA%A3n%20l%C3%BD%20kho&matchtype=p&gad_source=1&gclid=Cj0KCQjwv_m-BhC4ARIsAIqNeBvXKwmGa0CtBE3jVa06xYod84TAkp8LhPdab-o6IqNISw0YcgMTMrMaAieDEALw_wcB" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 rounded-[5px] [background:linear-gradient(225deg,rgba(102,117,247,1)_0%,rgba(87,0,123,1)_100%)] text-white font-semibold">
                  Dự án của chúng tôi
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

