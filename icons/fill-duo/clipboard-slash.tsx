import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClipboardSlash({
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
          d="M5.25 2C3.73079 2 2.5 3.23079 2.5 4.75V14.25C2.5 14.6408 2.58196 15.0157 2.73187 15.3557L15.2485 3.60067C14.8139 2.65767 13.8599 2 12.75 2H5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.5303 1.96967C16.8232 2.26256 16.8232 2.73744 16.5303 3.03033L2.78033 16.7803C2.48744 17.0732 2.01256 17.0732 1.71967 16.7803C1.42678 16.4874 1.42678 16.0126 1.71967 15.7197L15.4697 1.96967C15.7626 1.67678 16.2374 1.67678 16.5303 1.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.68201 17H12.75C14.2692 17 15.5 15.7692 15.5 14.25V6.18201L4.68201 17Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.5 2.25C5.5 1.28379 6.28379 0.5 7.25 0.5H10.75C11.7162 0.5 12.5 1.28379 12.5 2.25C12.5 3.21621 11.7162 4 10.75 4H7.25C6.28379 4 5.5 3.21621 5.5 2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ClipboardSlash;
