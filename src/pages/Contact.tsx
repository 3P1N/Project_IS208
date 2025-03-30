import { useTranslation } from "react-i18next"
import { Mail } from "lucide-react"

// Team members data
const teamMembers = [
  {
    name: "Phạm Văn Thanh Phiên",
    position: "23521158",
    email: "23521158@gm.uit.edu.vn",
    avatar: "/Project_IS208/Phien.jpg",
  },
  {
    name: "Ngô Tùng Nhân",
    position: "23521077",
    email: "23521077@gm.uit.edu.vn",
    avatar: "/Project_IS208/Nhan1.jpg",
  },
  {
    name: "Nguyễn Đình Phát",
    position: "23521144",
    email: "23521144@gm.uit.edu.vn",
    avatar: "/Project_IS208/Phat.jpg?height=80&width=80",
  },
  {
    name: "Trần Thế Phong",
    position: "23521175",
    email: "23521175@gm.uit.edu.vn",
    avatar: "/Project_IS208/Phong.png?height=80&width=80",
  },
  // {
  //   name: "Sophia Chen",
  //   position: "UX/UI Designer",
  //   email: "sophia.chen@pmit.com",
  //   avatar: "/placeholder.svg?height=80&width=80",
  // },
  // {
  //   name: "William Taylor",
  //   position: "Marketing Specialist",
  //   email: "william.taylor@pmit.com",
  //   avatar: "/placeholder.svg?height=80&width=80",
  // },
]

export const ContactPage = () => {
  const { t } = useTranslation()

  return (
    <div className="px-4 md:px-[148px] py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Liên hệ Đội ngũ của Chúng tôi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Có câu hỏi hoặc muốn thảo luận về một dự án? Hãy liên hệ trực tiếp với các thành viên trong đội ngũ của chúng tôi dưới đây. Chúng tôi luôn sẵn sàng hỗ trợ và sẽ phản hồi yêu cầu của bạn sớm nhất có thể.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover bg-purple-100"
                />
                <div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.position}</p>
                </div>
              </div>

              <a
                href={`mailto:${member.email}`}
                className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors mt-4 group"
              >
                <Mail size={18} />
                <span className="group-hover:underline">{member.email}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Company Contact Information */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Thông tin công ty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">23521175@gm.uit.edu.vn</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Số điện thoại</h3>
                <p className="text-gray-600">(028) 372 52002</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Địa chỉ</h3>
                <p className="text-gray-600">Khu phố 6, phường Linh Trung, Thành phố Thủ Đức, Thành phố HCM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

