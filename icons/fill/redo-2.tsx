import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Redo2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m11.25,8.141c-.175,0-.351-.061-.493-.185-.615-.537-2.309-1.785-4.757-1.785s-4.142,1.248-4.757,1.785c-.312.273-.786.24-1.058-.072-.272-.312-.24-.786.072-1.058.742-.648,2.787-2.155,5.743-2.155s5.001,1.507,5.743,2.155c.312.272.344.746.072,1.058-.148.17-.356.257-.565.257Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m7.286,9.21c-.331,0-.633-.22-.724-.555-.108-.4.129-.812.529-.919l3.171-.855-1.138-3.082c-.144-.389.055-.82.444-.963.386-.144.82.055.963.444l1.422,3.852c.073.198.06.417-.037.604s-.268.325-.471.38l-3.964,1.069c-.065.018-.131.026-.196.026Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Redo2;
