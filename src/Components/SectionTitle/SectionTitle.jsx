import "./SectionTitle.css"

const SectionTitle = ({ title, subTitle }) => {
   return (
      <div className="text-center about">
         <h1 className="title">{title}</h1>
         <h2 className="sub-title">{subTitle}</h2>
         <hr />
      </div>
   );
};

export default SectionTitle;