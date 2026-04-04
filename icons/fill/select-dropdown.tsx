import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SelectDropdown({
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
          d="M14.25,4H3.75c-1.517,0-2.75,1.233-2.75,2.75v4.5c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V6.75c0-1.517-1.233-2.75-2.75-2.75Zm-7,5.75h-2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm7.03-.72l-1.75,1.75c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-1.75-1.75c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.22,1.22,1.22-1.22c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SelectDropdown;
