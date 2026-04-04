import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeHeart({
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
          d="M1 5.25C1 3.73079 2.23079 2.5 3.75 2.5H14.25C15.7692 2.5 17 3.73079 17 5.25V9.19693C16.628 9.0694 16.2287 9.00012 15.8124 9.00012H15.8027L15.7931 9.00025C15.1532 9.00849 14.5381 9.18144 13.9996 9.4899C13.46 9.18121 12.844 9.00848 12.2048 9.00025L12.1905 9.00006L12.1763 9.00015C10.1271 9.01265 8.49164 10.6896 8.49899 12.7279C8.50282 13.7924 8.80192 14.7181 9.23224 15.5H3.75C2.23079 15.5 1 14.2692 1 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.7301 17.6832C13.8999 17.7724 14.0982 17.7724 14.268 17.6832C15.1652 17.2117 17.999 15.5022 17.999 12.7225C18.0034 11.5017 17.0253 10.5075 15.8124 10.5001C15.0827 10.5095 14.4044 10.8801 13.999 11.4908C13.5936 10.8801 12.9153 10.5095 12.1856 10.5001C10.9727 10.5075 9.99458 11.5017 9.99898 12.7225C9.99898 15.5022 12.8329 17.2116 13.7301 17.6832Z"
          fill={fill}
        />
        <path
          d="M16.9688 4.83458L9.84531 8.76513C9.31885 9.05549 8.68124 9.05557 8.15478 8.76521L1.03101 4.83535C1.23084 3.513 2.37171 2.5 3.74998 2.5H14.25C15.628 2.5 16.7687 3.5126 16.9688 4.83458Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeHeart;
