import React from "react";
import { useTranslation } from "react-i18next";
const teamMembers = [
  {
    name: "Thanh Phiên",
    role: ["Fullstack Developer"],
    avatar: "/Project_IS208/Saitama.webp",
    description: "Một lập trình viên fullstack nhiệt huyết với nền tảng vững chắc về các công nghệ phía máy chủ, Phiên luôn mong muốn xây dựng các hệ thống mở rộng và hiệu quả, đồng thời không ngừng nâng cao chuyên môn trong lĩnh vực phát triển fullstack.",
    expertise: ["C++", "React", "Java","SQL", "ChatGPT"]
  },
  {
    name: "Tùng Nhân",
    role:  ["Frontend Developer", "Business Analyst", "Tester"],
    avatar: "/Project_IS208/Nhan.png",
    description: "Một người kinh nghiệm trong thiết kế hệ thống, thành thạo C++ và JavaScript, đồng thời sở hữu nền tảng vững chắc về cơ sở dữ liệu. Với tinh thần ham học hỏi, Nhân luôn chủ động nâng cao kỹ năng và mở rộng kiến thức để phát triển trong lĩnh vực công nghệ.",
    expertise: ["C++", "Python", "Java", "SQL"]
  },
  {
    name: "Đình Phát",
    role: ["Backend Developer", "Data Analyst"],
    avatar: "/Project_IS208/Phat.jpg",
    description: "Với nền tảng vững chắc về lập trình, Phát thành thạo C++, Java, Python và các hệ quản trị cơ sở dữ liệu như SQL Server và Oracle. Luôn tìm kiếm cơ hội để mở rộng kiến thức và kỹ năng, Phát không ngừng nâng cao chuyên môn trong lĩnh vực phát triển phần mềm.",
    expertise: ["Database", "Java", "C++", "Python"]
  },
  {
    name: "Thế Phong",
    role: ["Project Manager", "Business Analyst"],
    avatar: "/Project_IS208/Phong.png",
    description: "Phong là một Quản lý Dự án đầy nhiệt huyết với nền tảng vững chắc về lập kế hoạch, điều phối và làm việc nhóm, luôn mong muốn phát triển và tối ưu hóa việc triển khai dự án.",
    expertise: ["Project Planning", "Team Coordination","Workflow Optimization", "Problem-solving"]
  }
];

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 md:px-[148px] py-12">
      {/* Team Introduction */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Về chúng tôi </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
        Hãy gặp gỡ đội ngũ chuyên gia tài năng của chúng tôi, những người luôn nỗ lực không ngừng để biến ý tưởng của bạn thành hiện thực.
        Mỗi thành viên đều mang đến chuyên môn độc đáo và đam mê để tạo ra những kết quả xuất sắc.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col md:flex-row">
              {/* Avatar Section */}
              <div className="md:w-1/3">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {member.role.map((role, roleIndex) => (
                      <span 
                        key={roleIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  {member.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Chuyên môn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Company Values */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Giá trị cốt lõi của chúng tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Đổi mới sáng tạo</h3>
            <p className="text-gray-600">
              Chúng tôi không ngừng vượt qua giới hạn và đón nhận những công nghệ mới để mang đến các giải pháp tiên tiến.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Hợp tác</h3>
            <p className="text-gray-600">
            Chúng tôi tin vào sức mạnh của làm việc nhóm và giao tiếp cởi mở để đạt được kết quả xuất sắc.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-purple-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Chất lượng</h3>
            <p className="text-gray-600">
            Chúng tôi duy trì những tiêu chuẩn cao nhất trong công việc, đảm bảo các giải pháp đáng tin cậy và có khả năng mở rộng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};