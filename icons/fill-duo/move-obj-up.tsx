import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjUp({
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
          d="M14.25 12H3.75C2.7835 12 2 12.7835 2 13.75V14.75C2 15.7165 2.7835 16.5 3.75 16.5H14.25C15.2165 16.5 16 15.7165 16 14.75V13.75C16 12.7835 15.2165 12 14.25 12Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.28 6.03005L8.25 4.06002V9.74905C8.25 10.163 8.586 10.499 9 10.499C9.414 10.499 9.75 10.163 9.75 9.74905V4.061L11.72 6.03103C11.866 6.17703 12.058 6.251 12.25 6.251C12.442 6.251 12.634 6.17803 12.78 6.03103C13.073 5.73803 13.073 5.26299 12.78 4.96999L9.53 1.71999C9.237 1.42699 8.762 1.42699 8.469 1.71999L5.219 4.96999C4.926 5.26299 4.926 5.73803 5.219 6.03103C5.512 6.32403 5.987 6.32305 6.28 6.03005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoveObjUp;
