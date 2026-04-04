import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Markdown({
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
          d="M2.75 3C1.23079 3 0 4.23079 0 5.75V12.25C0 13.7692 1.23079 15 2.75 15H15.25C16.7692 15 18 13.7692 18 12.25V5.75C18 4.23079 16.7692 3 15.25 3H2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3 6.75C3 6.33579 3.33579 6 3.75 6H4.144C4.37742 6 4.59753 6.10868 4.73945 6.29399L6.25 8.26646L7.76055 6.29399C7.90247 6.10868 8.12258 6 8.356 6H8.75C9.16421 6 9.5 6.33579 9.5 6.75V11.25C9.5 11.6642 9.16421 12 8.75 12C8.33579 12 8 11.6642 8 11.25V8.4484L6.84545 9.95601C6.70353 10.1413 6.48342 10.25 6.25 10.25C6.01658 10.25 5.79647 10.1413 5.65455 9.95601L4.5 8.4484V11.25C4.5 11.6642 4.16421 12 3.75 12C3.33579 12 3 11.6642 3 11.25V6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14 6.75C14 6.33579 13.6642 6 13.25 6C12.8358 6 12.5 6.33579 12.5 6.75V9.43934L12.0303 8.96967C11.7374 8.67678 11.2626 8.67678 10.9697 8.96967C10.6768 9.26256 10.6768 9.73744 10.9697 10.0303L12.7197 11.7803C13.0126 12.0732 13.4874 12.0732 13.7803 11.7803L15.5303 10.0303C15.8232 9.73744 15.8232 9.26256 15.5303 8.96967C15.2374 8.67678 14.7626 8.67678 14.4697 8.96967L14 9.43934V6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Markdown;
