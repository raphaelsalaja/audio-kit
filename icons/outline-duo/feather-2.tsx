import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Feather2({
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
          d="m4,14v-4.4071c0-.5473.2179-1.0729.6051-1.4601l5.0432-5.0432c1.4528-1.4528,3.8092-1.4528,5.2621,0,1.4528,1.4529,1.4528,3.8092,0,5.2621l-5.0432,5.0432c-.3872.3872-.9128.6051-1.4601.6051h-.7569"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m2,16l6.75-6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4.25,13.75v-4.268c0-.53.211-1.039.586-1.414l4.884-4.884c1.407-1.407,3.689-1.407,5.096,0h0c1.407,1.407,1.407,3.689,0,5.096l-4.884,4.884c-.375.375-.884.586-1.414.586h-.067"
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

export default Feather2;
