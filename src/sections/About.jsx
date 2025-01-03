import React from "react";


const Title = ({ name }) => {
  return <div className=" text-red-700 text-4xl md:pt-4"> {name}</div>
}

const Description = ({ des }) => {
  return <div className=" text-[#6D6D6D] text-lg pt-2  " >{des}</div>
}

const Note = ({ note }) => {
  return <div className=" text-white italic text-l pt-6  " >{note}</div>
}

const Button = ({ name, url_name, target_name }) => {
  return (<div>
    <a href={url_name} target={target_name}>
      <button className=" mt-3 border  font-[500] rounded-[3px] pt-1 pb-1 pl-3 pr-3 text-l shadow shadow-slate-300  hover:bg-white hover:text-black " >{name}</button>
    </a>
  </div>)
}


const About = () => {
  return (

    <>

      <div
        style={{
          background: 'linear-gradient(to right, black, #100000 85%, #300000 100%)',
        }}
        className="   md:border-none max-w-full h-[500px] md:h-full   border border-gray-600 text-white md:flex   overflow-auto ">

        <div className=" space-y-3 pt-2 pb-1 mr-2 ml-5 md:ml-[40px] mb-3  "  >
          <Title name="What is TED?" />
          <Description des="TED is a global platform dedicated to spreading ideas through short, powerful talks. Founded in 1984, TED stands for Technology, Entertainment, and Design, but its scope now includes science, business, art, and much more. With its slogan 'Ideas Worth Spreading,' TED hosts annual conferences featuring world- renowned speakers who captivate audiences with innovative ideas and thought-provoking perspectives." />
          {/* <div className="pt-2 md:pt-3"> */}
          <Note note='"TED Talks have been viewed over 1 billion times worldwide!"' />
          {/* </div> */}

          <Button name="Explore TED Talks" url_name="https://www.ted.com/about" target_name="blank" />
        </div>
        <div className=" space-y-3 pt-2 pb-2 mr-2 ml-5 mb-3 ">
          <Title name="What is TEDx?" />
          <Description des="TEDx events are independently organized under a license from TED, designed to bring the spirit of TED to local communities. 'x' signifies an independently organized event, driven by passionate volunteers who curate speakers, ideas, and experiences tailored to their audience. TEDx events empower communities to share ideas, foster dialogue, and spark connections." />
        </div>
        <div className="space-y-3 pt-2 pb-1 mr-2 md:mr-[40px] ml-5 mb-3 ">
          <Title name="What is TEDxVSSUT?" />
          <Description des="TEDxVSSUT is the official TEDx event hosted by Veer Surendra Sai University of Technology (VSSUT).Our mission is to spotlight the brilliant minds and groundbreaking ideas that emerge from our vibrant university community. TEDxVSSUT brings together students, faculty, alumni, and visionary thinkers to spark conversations that matter.TEDxVSSUT 2024 promises to ignite creativity, challenge perspectives, and inspire action." />
          <Note note='"Be a part of this transformative experience!"' />
          <Button name="Join Us " url_name="#TED" target_name="" />
        </div>




      </div>

    </>

  )


};
export default About;
