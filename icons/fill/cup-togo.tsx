import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CupTogo({
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
          d="M15.25,3.5h-1.442l-.59-1.965c-.096-.317-.388-.535-.719-.535H5.5c-.331,0-.623,.217-.719,.535l-.59,1.965h-1.442c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H15.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.809,6.002c-.417-.035-.774,.276-.807,.688l-.103,1.309H5.101l-.103-1.309c-.033-.412-.395-.715-.807-.688-.413,.033-.722,.394-.689,.807l.678,8.579c.071,.904,.838,1.612,1.744,1.612h6.152c.906,0,1.673-.708,1.744-1.612l.678-8.579c.032-.413-.276-.774-.689-.807Zm-1.732,9.498H5.924c-.129,0-.238-.101-.248-.23l-.14-1.77h6.928l-.14,1.77c-.01,.129-.119,.23-.248,.23Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CupTogo;
