import { Title } from "../ui/Title/Title";

const Location = () => {
  return (
    <section
      id="location"
      className="w-full h-auto py-5 pt-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title1={"Location"} title2={"Location"} />
      </div>
      <div
        className="w-full h-[300px] md:h-[400px] overflow-x-hidden"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <iframe
          className="w-full h-full md:h-[400px] rounded"
          title="Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1279078417915!2d89.37233267517156!3d24.722488678019676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5299872276e7%3A0x1fa4833d70cb6fa5!2sBaroAnjul%20Bazar!5e0!3m2!1sen!2sbd!4v1698417903567!5m2!1sen!2sbd"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
