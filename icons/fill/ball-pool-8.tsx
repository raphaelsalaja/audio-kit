import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallPool8({
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
          d="M9,8.83c-.606,0-1.118,.382-1.118,.835s.512,.835,1.118,.835,1.118-.383,1.118-.835-.512-.835-1.118-.835Z"
          fill={fill}
        />
        <path
          d="M9.879,6.665c0-.36-.403-.665-.879-.665s-.879,.304-.879,.665,.403,.665,.879,.665,.879-.305,.879-.665Z"
          fill={fill}
        />
        <path
          d="M14.657,3.343c-1.511-1.511-3.52-2.343-5.657-2.343S4.854,1.832,3.343,3.343c-1.511,1.511-2.343,3.52-2.343,5.657s.832,4.146,2.343,5.657c1.511,1.511,3.52,2.343,5.657,2.343s4.146-.832,5.657-2.343c1.511-1.511,2.343-3.52,2.343-5.657s-.832-4.146-2.343-5.657Zm-5.657,8.657c-1.443,0-2.618-1.048-2.618-2.335,0-.645,.295-1.229,.77-1.652-.328-.371-.532-.836-.532-1.348,0-1.193,1.067-2.165,2.379-2.165s2.379,.971,2.379,2.165c0,.512-.204,.977-.532,1.348,.475,.423,.77,1.007,.77,1.652,0,1.288-1.174,2.335-2.618,2.335Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BallPool8;
