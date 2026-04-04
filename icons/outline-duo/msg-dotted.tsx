import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgDotted({
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
          d="m9,1.75C4.9959,1.75,1.75,4.9958,1.75,9c0,.4702.0485.9287.134,1.374l-.0049-.0051c.0021.0115.007.0215.0092.033.0693.3535.1694.6953.2881,1.0283.0233.0654.0461.1304.0713.1948.126.324.2722.637.4415.9363.0101.0178.0162.0383.0265.0562.4296.8062-.045,2.7119-.9656,3.6326,1.25.0676,2.8907-.4929,3.6261-.9692.0187.0107.04.0171.0589.0278.2963.168.6059.3135.9263.4387.0631.0247.1267.0469.1907.0698.3339.1199.6762.2219,1.0308.2922.0056.0012.0106.0034.0162.0046l-.0025-.0024c.4543.0891.923.1384,1.4035.1384,4.0041,0,7.25-3.2461,7.25-7.25S13.0041,1.75,9,1.75Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m4.987,2.961c.778-.518,1.662-.89,2.612-1.075"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m1.879,7.631c.185-.968.562-1.867,1.091-2.657"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.401,1.886c.95.185,1.834.557,2.612,1.075"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.03,4.974c.529.79.906,1.689,1.091,2.657"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.401,16.114c.95-.185,1.834-.557,2.612-1.075"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.03,13.026c.529-.79.906-1.689,1.091-2.657"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m1.879,10.369c.1538.8048.4404,1.562.8367,2.2484.4296.8061-.0451,2.712-.9657,3.6326,1.25.0676,2.8907-.493,3.6261-.9693.6791.3927,1.4279.6785,2.2229.8333"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MsgDotted;
