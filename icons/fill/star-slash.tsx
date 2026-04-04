import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarSlash({
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
          d="M4.569,10.812l-.542,3.161L12.313,5.688l-.574-.083L9.672,1.418c-.252-.512-1.093-.512-1.345,0l-2.066,4.186-4.62,.671c-.282,.041-.517,.239-.605,.51-.088,.271-.015,.57,.19,.769l3.343,3.258Z"
          fill={fill}
        />
        <path
          d="M16.358,6.275l-1.267-.184L5.098,16.084l3.902-2.052,4.132,2.173c.11,.058,.229,.086,.349,.086,.155,0,.31-.048,.441-.143,.231-.168,.347-.452,.298-.734l-.79-4.601,3.343-3.258c.205-.199,.278-.498,.19-.769-.088-.271-.323-.469-.605-.51Z"
          fill={fill}
        />
        <path
          d="M2,16.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L15.47,1.47c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L2.53,16.53c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default StarSlash;
