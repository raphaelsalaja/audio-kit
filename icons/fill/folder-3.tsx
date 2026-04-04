import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder3({
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
          d="M13.75,16H4c-1.379,0-2.5-1.122-2.5-2.5V3.75c0-.965,.785-1.75,1.75-1.75h2.695c.608,0,1.163,.308,1.484,.823l.736,1.177h5.584c.965,0,1.75,.785,1.75,1.75,0,.414-.336,.75-.75,.75s-.75-.336-.75-.75c0-.138-.112-.25-.25-.25H7.75c-.259,0-.499-.133-.636-.353l-.956-1.53c-.046-.074-.126-.118-.213-.118H3.25c-.138,0-.25,.112-.25,.25V13.5c0,.551,.448,1,1,1s1-.449,1-1v-4.25c0-.965,.785-1.75,1.75-1.75H14.75c.965,0,1.75,.785,1.75,1.75v4c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Folder3;
