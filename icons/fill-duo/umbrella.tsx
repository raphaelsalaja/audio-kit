import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Umbrella({
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
          d="M9 10C9.41421 10 9.75 10.3358 9.75 10.75V14.625C9.75 15.9362 8.68621 17 7.375 17C6.06379 17 5 15.9362 5 14.625C5 14.2108 5.33579 13.875 5.75 13.875C6.16421 13.875 6.5 14.2108 6.5 14.625C6.5 15.1078 6.89221 15.5 7.375 15.5C7.85779 15.5 8.25 15.1078 8.25 14.625V10.75C8.25 10.3358 8.58579 10 9 10Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 0.75C9.75 0.335786 9.41421 0 9 0C8.58579 0 8.25 0.335786 8.25 0.75V1.0347C4.18346 1.41281 1 4.8347 1 9C1 9.32499 1.2093 9.613 1.51841 9.71335C1.82751 9.8137 2.16608 9.70356 2.35698 9.44055C2.42303 9.34954 3.05496 8.5221 4.14058 8.49984C5.28192 8.47612 5.96263 9.36429 6.0182 9.44079C6.1612 9.63764 6.3908 9.7529 6.63409 9.74994C6.87739 9.74699 7.10413 9.62621 7.24231 9.42594C7.2898 9.35712 7.91363 8.5 9 8.5C10.0864 8.5 10.7102 9.35712 10.7577 9.42594C10.8959 9.62621 11.1226 9.74699 11.3659 9.74994C11.6092 9.7529 11.8388 9.63764 11.9818 9.44079C12.0374 9.36429 12.7183 8.47613 13.8596 8.49984C14.9452 8.5221 15.577 9.34954 15.643 9.44055C15.8339 9.70356 16.1725 9.8137 16.4816 9.71335C16.7907 9.613 17 9.32499 17 9C17 4.8347 13.8165 1.41281 9.75 1.0347V0.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Umbrella;
