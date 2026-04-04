import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierStar2({
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
          d="M1.5 7.75C1.5 4.29829 4.29829 1.5 7.75 1.5C11.2017 1.5 14 4.29829 14 7.75C14 11.2017 11.2017 14 7.75 14C4.29829 14 1.5 11.2017 1.5 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.6073 12.668L15.2197 16.2803C15.5126 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L12.668 11.6073C12.3581 12.0018 12.0018 12.3581 11.6073 12.668Z"
          fill={fill}
        />
        <path
          d="M10.6114 6.8197C10.5652 6.6768 10.4422 6.5728 10.293 6.5517L8.7809 6.3321L8.10311 4.9608C7.97171 4.6918 7.52831 4.6918 7.39701 4.9608L6.7192 6.3321L5.20711 6.5517C5.05791 6.5738 4.93491 6.6778 4.88871 6.8197C4.84251 6.9616 4.8803 7.1192 4.9885 7.2232L6.0835 8.2908L5.8261 9.7977C5.8009 9.9459 5.8608 10.0951 5.9816 10.1834C6.1024 10.2717 6.26431 10.2832 6.39771 10.2139L7.75011 9.5025L9.1025 10.2139C9.1603 10.2444 9.22331 10.2591 9.28641 10.2591C9.36841 10.2591 9.4493 10.2339 9.5186 10.1834C9.6395 10.0951 9.70041 9.9459 9.67411 9.7977L9.41671 8.2908L10.5117 7.2232C10.6199 7.1181 10.6577 6.9615 10.6114 6.8197Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MagnifierStar2;
