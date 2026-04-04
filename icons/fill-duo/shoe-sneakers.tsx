import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShoeSneakers({
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
          d="M7.43377 3.0534C7.6738 2.71583 8.14204 2.63674 8.47962 2.87677L16.7121 8.73026C17.4849 9.24326 18 10.1215 18 11.125C18 12.7132 16.7132 14 15.125 14H3.25C1.73054 14 0.5 12.768 0.5 11.25V5C0.5 4.03379 1.28379 3.25 2.25 3.25H2.43399C2.7445 3.25 3.0229 3.44135 3.13418 3.73123C3.53193 4.76744 4.52731 5.5 5.694 5.5C6.67544 5.5 7.48113 5.05954 7.95245 4.34246L7.6104 4.09925C7.27282 3.85923 7.19374 3.39098 7.43377 3.0534Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.8264 4.54543L12.051 5.41616L10.8708 7.30276C10.6511 7.65392 10.1884 7.7605 9.83719 7.54082C9.48603 7.32114 9.37945 6.85838 9.59913 6.50722L10.8264 4.54543Z"
          fill={fill}
        />
        <path
          d="M0.5 9.6757V11.25C0.5 12.768 1.73054 14 3.25 14H6.53016L5.23438 11.2141C5.07033 10.8596 4.75086 10.6019 4.37196 10.5175L0.5 9.6757Z"
          fill={fill}
        />
        <path
          d="M8.18446 14L15.125 14C16.7132 14 18 12.7132 18 11.125C18 11.0831 17.9991 11.0414 17.9973 11H6.78912L8.18446 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShoeSneakers;
