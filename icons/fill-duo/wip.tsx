import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wip({
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
          d="M9.00009 17C4.58899 17 1.00009 13.4111 1.00009 9C1.00009 4.5889 4.58899 1 9.00009 1C13.4112 1 17.0001 4.5889 17.0001 9C17.0001 13.4111 13.4112 17 9.00009 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.2945 4.0264C9.0826 4.0108 8.8858 4.08792 8.7354 4.22952C8.5855 4.37112 8.5 4.56842 8.5 4.77542V8.93949L5.7417 11.6973C5.5938 11.8448 5.5142 12.048 5.5225 12.257C5.5308 12.466 5.626 12.6622 5.7847 12.7979C6.6924 13.5733 7.834 14 9 14C11.7568 14 14 11.7568 14 9.00003C14 6.36723 11.9332 4.1826 9.2945 4.0264Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Wip;
