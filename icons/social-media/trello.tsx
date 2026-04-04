import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Trello({
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M25.906,3H6.089c-1.707,.002-3.089,1.387-3.089,3.094V25.911c0,1.706,1.383,3.089,3.089,3.089H25.906c1.707,0,3.091-1.383,3.094-3.089V6.094c-.002-1.708-1.386-3.091-3.094-3.094ZM14.197,21.729c.002,.566-.454,1.026-1.02,1.028-.001,0-.003,0-.004,0h-4.348c-.566,0-1.024-.459-1.024-1.024,0-.001,0-.003,0-.004V8.829c-.002-.566,.454-1.026,1.02-1.028,.001,0,.003,0,.004,0h4.348c.566,0,1.024,.459,1.024,1.024,0,.001,0,.003,0,.004v12.9Zm10.002-5.923c0,.568-.46,1.028-1.028,1.028h-4.344c-.568,0-1.028-.46-1.028-1.028v-6.977c0-.568,.46-1.028,1.028-1.028h4.344c.568,0,1.028,.46,1.028,1.028v6.977Z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Trello;
