import cse from "../assets/department/cse_dept.jpg";
import civil from "../assets/department/civil_dept.jpg";
import mechanical from "../assets/department/me_dept.jpg";
import electrical from "../assets/department/ee_dept.jpg";

const Department = () => {
  const departments = [
    { id: 1, 
      name: "CSE",
      image:cse
    },
    { id: 2, 
      name: "Civil",
      image:civil
    },
    { id: 3, 
      name: "Mechanical",
      image: mechanical
    },
    { id: 4,
      name: "Electrical",
      image: electrical
    },
  ];

  return (
    <>
    <div className="flex flex-row flex-wrap justify-evenly">
      {departments.map((department) => (
        <div key={department.id} className="bg-slate-300 w-90 m-5 flex flex-col items-center rounded-b-3xl">
          <h1 className=" bg-red-600 w-full h-16 text-center pt-4 text-white text-2xl">{department.name}</h1>
          <img src={department.image} alt="" />
          <button className=" bg-blue-500 hover:bg-blue-700 w-60 h-16 text-center mt-5 text-white text-2xl rounded-lg mb-4">Know More</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default Department;
