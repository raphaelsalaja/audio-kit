import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pen2({
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
          d="M11.414,2.848L3.605,10.657c-.863,.864-1.401,3.406-1.593,4.459-.044,.242,.034,.491,.208,.665,.142,.142,.333,.22,.53,.22,.044,0,.089-.004,.134-.012,1.053-.191,3.595-.729,4.459-1.593l7.809-7.809c1.03-1.031,1.03-2.707,0-3.738-.998-.998-2.74-.997-3.738,0Zm2.677,2.677l-.94,.94-1.617-1.617,.94-.94c.216-.216,.503-.334,.809-.334s.592,.119,.808,.334c.445,.446,.445,1.171,0,1.617Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Pen2;
