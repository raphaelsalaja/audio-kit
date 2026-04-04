import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sneeze({
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
          d="M11.1,9.3l-1.355-1.806c-.064-1.757-.794-3.387-2.071-4.613-1.338-1.285-3.108-1.958-4.955-1.875-.402,.017-.72,.347-.72,.75v14.495c0,.414,.336,.75,.75,.75h2.5c.414,0,.75-.336,.75-.75v-1.75h.889c1.435,0,2.639-1.121,2.743-2.551l.078-1.075,1.068-.427c.217-.086,.381-.269,.444-.494s.018-.466-.122-.653Zm-4.1-1.3c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"
          fill={fill}
        />
        <circle cx="12.75" cy="11.75" fill={secondaryfill} r=".75" />
        <circle cx="15.25" cy="9.75" fill={secondaryfill} r=".75" />
        <circle cx="15.25" cy="13.75" fill={secondaryfill} r=".75" />
      </g>
    </svg>
  );
}

export default Sneeze;
