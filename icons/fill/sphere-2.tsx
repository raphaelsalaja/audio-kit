import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sphere2({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M17,9c0-4.411-3.589-8-8-8S1,4.589,1,9c0,4.337,3.471,7.871,7.78,7.989,.063,.017,.125,.039,.193,.039,.154,0,.304-.017,.449-.049,4.214-.221,7.578-3.71,7.578-7.979Zm-1.5,0c0,.592-1.06,1.355-2.874,1.823,.062-.594,.097-1.197,.097-1.796,0-2.197-.422-4.47-1.231-6.029,2.351,.98,4.008,3.3,4.008,6.001ZM3.02,11.545c1.558,.792,3.807,1.205,5.98,1.205,.599,0,1.202-.035,1.796-.097-.419,1.626-1.075,2.645-1.633,2.839-.055,.001-.108,.008-.163,.008-2.681,0-4.987-1.632-5.98-3.955Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sphere2;
