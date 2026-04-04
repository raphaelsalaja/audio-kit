import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tasks({
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
          d="M3.5 12.8828V7.75C3.5 5.4067 5.4067 3.5 7.75 3.5H12.8829C12.554 2.3494 11.5048 1.5 10.25 1.5H4.25C2.7334 1.5 1.5 2.7334 1.5 4.25V10.25C1.5 11.5049 2.3494 12.5542 3.5 12.8828Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 5H7.75C6.2334 5 5 6.2334 5 7.75V13.75C5 15.2666 6.2334 16.5 7.75 16.5H13.75C15.2666 16.5 16.5 15.2666 16.5 13.75V7.75C16.5 6.2334 15.2666 5 13.75 5ZM13.6016 9.19824L10.6016 13.2207C10.4688 13.3989 10.2637 13.5088 10.042 13.5215C10.0283 13.522 10.0137 13.5225 10 13.5225C9.793 13.5225 9.59569 13.437 9.45309 13.2856L7.95309 11.6876C7.66989 11.3858 7.6845 10.9111 7.9863 10.6274C8.289 10.3447 8.7636 10.359 9.0468 10.6613L9.93449 11.6064L12.3984 8.30176C12.6455 7.97026 13.1142 7.89995 13.4482 8.14905C13.7802 8.39665 13.8487 8.86624 13.6016 9.19824Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tasks;
