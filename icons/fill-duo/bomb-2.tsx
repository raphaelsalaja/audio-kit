import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bomb2({
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
          d="M14.146 5.277C13.778 4.651 13.329 4.077 12.813 3.571C12.334 3.102 11.799 2.693 11.222 2.354C10.929 2.181 10.554 2.228 10.312 2.47L9.34 3.441C8.59 3.148 7.805 3 6.999 3C3.416 3 0.5 5.916 0.5 9.5C0.5 13.084 3.416 16 7 16C10.584 16 13.5 13.084 13.5 9.5C13.5 8.693 13.352 7.908 13.06 7.158L14.031 6.187C14.273 5.945 14.319 5.572 14.146 5.277Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.3768 4.18289C13.5384 4.02151 13.6891 3.82401 13.939 3.82401C14.071 3.82401 14.195 3.87501 14.289 3.96901L15.169 4.84901C15.556 5.23601 16.061 5.43701 16.576 5.43701C16.939 5.43701 17.304 5.33801 17.631 5.13401C17.982 4.91501 18.09 4.45301 17.871 4.10101C17.653 3.74901 17.192 3.64001 16.838 3.86001C16.645 3.97901 16.388 3.94901 16.228 3.78901L15.348 2.90901C14.971 2.53301 14.47 2.32501 13.938 2.32501C13.405 2.32501 12.905 2.53301 12.529 2.90901L12.3156 3.12214C12.4873 3.26484 12.6533 3.41458 12.813 3.571C13.0111 3.76524 13.1993 3.96951 13.3768 4.18289Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bomb2;
