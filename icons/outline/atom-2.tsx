import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Atom2({
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
          d="M4.365,4.065c.022-.861,.269-1.493,.76-1.777,1.406-.812,4.281,1.535,6.421,5.242,.285,.493,.542,.985,.771,1.47"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.409,10.547c-.735-.449-1.159-.979-1.159-1.547,0-1.624,3.47-2.94,7.75-2.94,.569,0,1.124,.023,1.658,.067"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.044,15.482c-.756,.411-1.427,.514-1.919,.23-1.406-.812-.811-4.475,1.329-8.182,.285-.493,.582-.962,.888-1.402"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.635,13.935c-.022,.861-.269,1.493-.76,1.777-1.406,.812-4.281-1.535-6.421-5.242-.285-.493-.542-.985-.771-1.47"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.591,7.453c.735,.449,1.159,.979,1.159,1.547,0,1.624-3.47,2.94-7.75,2.94-.569,0-1.124-.023-1.658-.067"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.956,2.518c.756-.411,1.427-.514,1.919-.23,1.406,.812,.811,4.475-1.329,8.182-.285,.493-.582,.962-.888,1.402"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="9" cy="9" fill={secondaryfill} r="1" stroke="none" />
      </g>
    </svg>
  );
}

export default Atom2;
