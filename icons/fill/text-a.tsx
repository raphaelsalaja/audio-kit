import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextA({
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
        <rect
          height="1.5"
          width="7.785"
          fill={secondaryfill}
          x="5.107"
          y="11"
        />
        <path
          d="M14.25,16c-.3,0-.584-.182-.699-.479L9,3.789,4.449,15.521c-.15,.387-.586,.577-.97,.428-.386-.15-.578-.584-.428-.97L7.899,2.479c.112-.289,.39-.479,.699-.479h.803c.31,0,.587,.19,.699,.479l4.849,12.5c.15,.386-.042,.82-.428,.97-.089,.035-.181,.051-.271,.051Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TextA;
