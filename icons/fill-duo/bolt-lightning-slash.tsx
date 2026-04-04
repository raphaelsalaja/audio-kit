import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoltLightningSlash({
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
          d="M12.5 5.5H11.0963L12.184 2.70281L12.1844 2.70181C12.5011 1.88388 11.8998 1 11.019 1H6.84901C6.32578 1 5.8563 1.32701 5.67585 1.81984L3.29298 8.31947C2.99323 9.13488 3.59645 10 4.46602 10H7.99997L12.5 5.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.9065 6.27548L7.08524 14.0968L6.52889 16.044C6.42953 16.3917 6.59252 16.7609 6.91647 16.9218C7.24042 17.0826 7.63302 16.9894 7.85003 16.7L14.7505 7.49943C15.0372 7.11638 15.0638 6.65717 14.9065 6.27548Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoltLightningSlash;
