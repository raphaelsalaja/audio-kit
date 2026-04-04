import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquarePaintbrush({
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
          d="M16.37 1.635C16.08 1.345 15.693 1.185 15.282 1.185C14.871 1.185 14.484 1.345 14.194 1.635L10.404 5.427C10.876 5.647 11.317 5.938 11.696 6.318C12.078 6.701 12.36 7.142 12.574 7.607L16.371 3.812C16.971 3.212 16.97 2.235 16.37 1.635Z"
          fill={secondaryfill}
        />
        <path
          d="M10.632 7.377C10.069 6.812 9.32198 6.5 8.53098 6.5C7.74198 6.501 6.99398 6.813 6.43498 7.379C5.63998 8.183 5.50198 8.984 5.39198 9.629C5.27198 10.327 5.20598 10.711 4.38998 11.157C4.12498 11.302 3.97298 11.593 4.00398 11.893C4.03598 12.194 4.24498 12.446 4.53398 12.533C5.39598 12.792 6.31298 13.005 7.22798 13.005C8.40998 13.005 9.58698 12.65 10.632 11.58C11.787 10.421 11.787 8.536 10.632 7.377Z"
          fill={secondaryfill}
        />
        <path
          d="M4.25 4C3.55921 4 3 4.55921 3 5.25V13.75C3 14.4408 3.55921 15 4.25 15H12.75C13.4408 15 14 14.4408 14 13.75V9.49109C14 9.07688 14.3358 8.74109 14.75 8.74109C15.1642 8.74109 15.5 9.07688 15.5 9.49109V13.75C15.5 15.2692 14.2692 16.5 12.75 16.5H4.25C2.73079 16.5 1.5 15.2692 1.5 13.75V5.25C1.5 3.73079 2.73079 2.5 4.25 2.5H8.5081C8.92231 2.5 9.2581 2.83579 9.2581 3.25C9.2581 3.66421 8.92231 4 8.5081 4H4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquarePaintbrush;
