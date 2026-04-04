import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Minus({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M20.9452 13.474L18.542 14.7367V18.5655L20.9452 17.4657V13.474Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M18.5064 14.7468L21 13.5" stroke={fill} />
        <path d="M3.5 7.25L18.5 14.75V18.5" stroke={fill} />
        <path
          d="M5.32628 6.27192L4.05279 6.90867C3.714 7.07806 3.5 7.42432 3.5 7.80309V10.567C3.5 10.9458 3.714 11.2921 4.05279 11.4615L17.8467 18.3584C18.2591 18.5646 18.7434 18.5697 19.16 18.3722L20.4283 17.771C20.7774 17.6055 21 17.2537 21 16.8674V14.1156C21 13.7381 20.7874 13.3928 20.4503 13.2228L6.67255 6.27425C6.24936 6.06082 5.7502 6.05996 5.32628 6.27192Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Minus;
