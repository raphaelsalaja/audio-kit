import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DogSlash({
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
          d="m6,10.75c.2485.1775.5118.3291.7799.4702l7.176-7.176-.2059-.0442-1.5-2.25-1.5,5h-6.5c-1.1046,0-2,.8955-2,2v7l3.2143-3.2144.5357-1.7856Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9.7235,11.4853l.5265.5147v3.75h3v-2.75l1-5h.7842c.9871,0,1.8266-.7202,1.9767-1.6958l.2391-1.5542-.6431-.1379-6.8833,6.8732Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m10.75,6.75c.3103,1.3474,1.4227,2.2378,3.2,2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.7733,11.2268c-.2671-.1407-.5255-.2998-.7733-.4768h0s-.5357,1.7857-.5357,1.7857"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m17.206,5.0362l-.1951,1.2679c-.1501.9757-.9896,1.6959-1.9767,1.6959h-.7842l-1,5v2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2.25,15.75v-7c0-1.1046.8954-2,2-2h6.5l1.5-5,1.5,2.25.2059.0441"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m1.25,4.75h0c0,1.1046.8954,2,2,2h.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8.75,4.25c-1.6569,0-3-1.3431-3-3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.25"
          x2="10.25"
          y1="15.75"
          y2="12"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2"
          x2="16"
          y1="16"
          y2="2"
        />
      </g>
    </svg>
  );
}

export default DogSlash;
