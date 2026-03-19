import allengers from "../assets/placement/allengers.png"; 
import blueStar from "../assets/placement/blueStar.png"; 
import eClerx from "../assets/placement/eClerx.png"; 
import emicon from "../assets/placement/emicon.png"; 
import erginus from "../assets/placement/erginus.png"; 
import HCL from "../assets/placement/HCL.png"; 
import indSphinx from "../assets/placement/indSphinx.png"; 
import netSmartz from "../assets/placement/netSmartz.png"; 
import pernodRicard from "../assets/placement/pernodRicard.png"; 
import sasvat from "../assets/placement/sasvat.png"; 
import shipManagement from "../assets/placement/shipManagement.png"; 
import techMahindra from "../assets/placement/techMahindra.png"; 
import TOI from "../assets/placement/TOI.png"; 

const Placement = () => {

  const company = [
    {id:1,
      name: "Allengers",
      image: allengers
    },

    {id:2,
      name: "BlueStar",
      image: blueStar
    },

    {id:3,
      name: "EClerx",
      image: eClerx
    },

    {id:4,
      name: "Emicon",
      image: emicon
    },

    {id:5,
      name: "Erginus",
      image: erginus
    },

    {id:6,
      name: "HCL",
      image: HCL
    },

    {id:7,
      name: "IndSphinx",
      image: indSphinx
    },

    {id:8,
      name: "NetSmartz",
      image: netSmartz
    },

    {id:9,
      name: "PernodRicard",
      image: pernodRicard
    },

    {id:10,
      name: "Sasvat",
      image: sasvat
    },

    {id:11,
      name: "ShipManagement",
      image: shipManagement
    },

    {id:12,
      name: "TechMahindra",
      image: techMahindra
    },

    {id:13,
      name: "TOI",
      image: TOI
    }
  ]

  return (
    <>
      <div>
        <h1>Our Placement Partners</h1>

        <div>
          {company.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <img src={item.image} alt="Company image" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Placement;
