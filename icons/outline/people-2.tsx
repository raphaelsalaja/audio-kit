import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function People2({
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
        <circle
          cx="4.37"
          cy="2.5"
          fill="none"
          r="1.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="4.37"
          cy="2.5"
          fill="none"
          r="1.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="13.631"
          cy="2.5"
          fill="none"
          r="1.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.37,17.25h.549c.533,0,.972-.418,.999-.95l.202-4.05,1.256-.359c.271-.077,.424-.363,.339-.631l-1.17-3.704c-.114-.359-.424-.624-.795-.689-.547-.095-1.013-.118-1.38-.114-.367-.004-.833,.019-1.38,.114-.371,.065-.682,.33-.795,.689l-1.17,3.704c-.085,.268,.069,.554,.339,.631l1.256,.359,.202,4.05c.027,.532,.466,.95,.999,.95h.549Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.37,17.25h.549c.533,0,.972-.418,.999-.95l.202-4.05,1.256-.359c.271-.077,.424-.363,.339-.631l-1.17-3.704c-.114-.359-.424-.624-.795-.689-.547-.095-1.013-.118-1.38-.114-.367-.004-.833,.019-1.38,.114-.371,.065-.682,.33-.795,.689l-1.17,3.704c-.085,.268,.069,.554,.339,.631l1.256,.359,.202,4.05c.027,.532,.466,.95,.999,.95h.549Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.631,17.25h.549c.533,0,.972-.418,.999-.95l.202-4.05,1.256-.359c.271-.077,.424-.363,.339-.631l-1.17-3.704c-.114-.359-.424-.624-.795-.689-.547-.095-1.013-.118-1.38-.114-.367-.004-.833,.019-1.38,.114-.371,.065-.682,.33-.795,.689l-1.17,3.704c-.085,.268,.069,.554,.339,.631l1.256,.359,.202,4.05c.027,.532,.466,.95,.999,.95h.549Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default People2;
