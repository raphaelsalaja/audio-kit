import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ring({
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
          d="M11.763,1.293l-.994-1.057c-.142-.151-.339-.236-.546-.236h-2.446c-.207,0-.405,.085-.546,.236l-.994,1.057c-.25,.266-.272,.673-.053,.965l1.85,2.456c.229,.304,.642,.384,.966,.203,.115,.064,.241,.096,.367,.096,.228,0,.452-.103,.6-.299l1.85-2.456c.22-.292,.197-.699-.053-.965Z"
          fill={secondaryfill}
        />
        <path
          d="M9,16c-3.446,0-6.25-2.804-6.25-6.25S5.554,3.5,9,3.5s6.25,2.804,6.25,6.25-2.804,6.25-6.25,6.25Zm0-11c-2.619,0-4.75,2.131-4.75,4.75s2.131,4.75,4.75,4.75,4.75-2.131,4.75-4.75-2.131-4.75-4.75-4.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Ring;
