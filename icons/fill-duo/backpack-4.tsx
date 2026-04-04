import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack4({
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
          d="M2.5 9.5C2.5 5.90979 5.40979 3 9 3C12.5902 3 15.5 5.90979 15.5 9.5V14.25C15.5 15.7692 14.2692 17 12.75 17H5.25C3.73079 17 2.5 15.7692 2.5 14.25V9.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path d="M5.5 12V17H12.5V12H5.5Z" fill={fill} />
        <path
          d="M5.5 10.5H12.5C12.5 8.56699 10.933 7 9 7C7.06699 7 5.5 8.56699 5.5 10.5Z"
          fill={fill}
        />
        <path
          d="M10.3849 3.14783L10.6847 1.52241C10.794 0.929277 11.3112 0.498993 11.914 0.498993H12.9201C13.6819 0.498993 14.2664 1.17455 14.1571 1.92828L13.709 5.01919C12.8287 4.09431 11.6787 3.42851 10.3849 3.14783Z"
          fill={fill}
        />
        <path
          d="M5.07986 0.499115C4.31806 0.499115 3.73357 1.17468 3.84282 1.92841L4.29087 5.01929C5.17119 4.09437 6.32124 3.42854 7.61499 3.14784L7.31522 1.52239C7.20591 0.929517 6.68889 0.499115 6.08596 0.499115H5.07986Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Backpack4;
