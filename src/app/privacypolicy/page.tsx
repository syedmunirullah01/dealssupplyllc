import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-screen-lg mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 ">
            For Deals Supply LLC - Your Trusted Amazon FBA Wholesale Supplier
          </p>
        </header>

        <article className="text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Introduction
            </h2>
            <p>
              At Deals Supply LLC, we prioritize your privacy and are committed
              to protecting your personal information. This Privacy Policy
              explains the types of information we collect, how we use it, and
              the steps we take to safeguard it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Personal Information
                </h3>
                <p>
                  When you create an account with us, we collect personal
                  details such as your name, email address, phone number, and
                  billing/shipping address.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Business Information
                </h3>
                <p>
                  To facilitate wholesale transactions as a leading Amazon FBA
                  supplier, we collect business-related information, including
                  your business name, type, industry focus, and business
                  registration number.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Transaction Information
                </h3>
                <p>
                  We collect data related to your transactions on our platform,
                  including order details, payment information, and transaction
                  history.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Log Data
                </h3>
                <p>
                  Like many websites, we collect information that your browser
                  sends whenever you visit our site. This may include your IP
                  address, browser type, pages visited, and the date and time of
                  your visit.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  To Provide Services
                </h3>
                <p>
                  We use your personal and business information to provide you
                  with access to our wholesale platform, facilitating
                  transactions as one of the best wholesale suppliers for Amazon
                  sellers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  To Improve Services
                </h3>
                <p>
                  We analyze usage data to enhance our services, website
                  functionality, and user experience, ensuring we remain among
                  the top Amazon wholesale suppliers in the USA.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  To Communicate
                </h3>
                <p>
                  We may use your contact information to inform you about your
                  account, orders, and updates related to our services, keeping
                  you informed about the best wholesale products to sell on
                  Amazon.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  To Ensure Security
                </h3>
                <p>
                  We implement measures to protect your information and secure
                  our platform, maintaining our reputation as a trusted Amazon
                  FBA wholesale distributor.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information Sharing
            </h2>
            <p>
              We do not sell, trade, or transfer your personal information to
              outside parties. However, we may share information with trusted
              third parties who assist us in operating our website, conducting
              our business, or servicing you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Choices
            </h2>
            <p>
              You can manage your account preferences and choose not to provide
              certain information; however, this may limit your ability to
              utilize some features of our platform, such as buying wholesale
              products to sell on Amazon.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cookies
            </h2>
            <p>
              We use cookies to enhance your experience on our site. You can
              disable cookies in your browser settings, but this may affect the
              functionality of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We have no
              control over their content or privacy practices and are not
              responsible for the information collected by these sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Changes to Privacy Policy
            </h2>
            <p>
              We reserve the right to update and modify this Privacy Policy at
              any time. Changes will be reflected with the "Last updated" date
              above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this privacy
              policy, please email us at{" "}
              <a
                href="mailto:info@dealssupplyllc.com"
                className="text-indigo-600"
              >
                info@dealssupplyllc.com
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
