// Generated from /Users/apple/Documents/Spring 2020/ProgLang/Webpage/CS383-Visualization/interpreter/parser/TypedLambda.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TypedLambdaLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INT=1, TRUE=2, FALSE=3, NIL=4, ABS=5, DOT=6, CONS=7, OF=8, IF=9, THEN=10, 
		ELSE=11, LET=12, IN=13, USING=14, CASE=15, CASE_OF=16, CASE_YIELD=17, 
		CASE_OR=18, FIX=19, ADD=20, SUB=21, MUL=22, DIV=23, MOD=24, LT=25, LTE=26, 
		GT=27, GTE=28, EQ=29, OP_AND=30, OP_OR=31, OP_NOT=32, MIN=33, T_BOOL=34, 
		T_INT=35, T_ARROW=36, OPEN_PAR=37, CLOSE_PAR=38, OPEN_MID=39, CLOSE_MID=40, 
		OPEN_BRACE=41, CLOSE_BRACE=42, COMMA=43, IDENTIFIER=44, SP=45, WS=46;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"INT", "TRUE", "FALSE", "NIL", "ABS", "DOT", "CONS", "OF", "IF", "THEN", 
		"ELSE", "LET", "IN", "USING", "CASE", "CASE_OF", "CASE_YIELD", "CASE_OR", 
		"FIX", "ADD", "SUB", "MUL", "DIV", "MOD", "LT", "LTE", "GT", "GTE", "EQ", 
		"OP_AND", "OP_OR", "OP_NOT", "MIN", "T_BOOL", "T_INT", "T_ARROW", "OPEN_PAR", 
		"CLOSE_PAR", "OPEN_MID", "CLOSE_MID", "OPEN_BRACE", "CLOSE_BRACE", "COMMA", 
		"IDENTIFIER", "SP", "WS"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, "'true'", "'false'", "'nil'", "'\\'", "'.'", "'::'", "':'", 
		"'if'", "'then'", "'else'", "'let'", "'in'", "'using'", "'case'", "'of'", 
		"'=>'", "'|'", "'fix'", "'+'", "'-'", "'*'", "'/'", "'%'", "'<'", "'<='", 
		"'>'", "'>='", "'='", "'and'", "'or'", "'not'", "'~'", "'Bool'", "'Int'", 
		"'->'", "'('", "')'", "'['", "']'", "'{'", "'}'", "','", null, "' '"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "INT", "TRUE", "FALSE", "NIL", "ABS", "DOT", "CONS", "OF", "IF", 
		"THEN", "ELSE", "LET", "IN", "USING", "CASE", "CASE_OF", "CASE_YIELD", 
		"CASE_OR", "FIX", "ADD", "SUB", "MUL", "DIV", "MOD", "LT", "LTE", "GT", 
		"GTE", "EQ", "OP_AND", "OP_OR", "OP_NOT", "MIN", "T_BOOL", "T_INT", "T_ARROW", 
		"OPEN_PAR", "CLOSE_PAR", "OPEN_MID", "CLOSE_MID", "OPEN_BRACE", "CLOSE_BRACE", 
		"COMMA", "IDENTIFIER", "SP", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public TypedLambdaLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TypedLambda.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\60\u00f8\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\3\2\3\2\3\2\7\2c\n\2\f\2\16\2f\13\2\5\2h\n\2"+
		"\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3"+
		"\7\3\7\3\b\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\f\3"+
		"\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\22\3\22\3\22\3\23\3\23"+
		"\3\24\3\24\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31"+
		"\3\32\3\32\3\33\3\33\3\33\3\34\3\34\3\35\3\35\3\35\3\36\3\36\3\37\3\37"+
		"\3\37\3\37\3 \3 \3 \3!\3!\3!\3!\3\"\3\"\3#\3#\3#\3#\3#\3$\3$\3$\3$\3%"+
		"\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3+\3,\3,\3-\5-\u00eb\n-\3-\7"+
		"-\u00ee\n-\f-\16-\u00f1\13-\3.\3.\3/\3/\3/\3/\2\2\60\3\3\5\4\7\5\t\6\13"+
		"\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'"+
		"\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'"+
		"M(O)Q*S+U,W-Y.[/]\60\3\2\5\5\2C\\aac|\6\2\62;C\\aac|\4\2\13\f\17\17\2"+
		"\u00fa\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2"+
		"\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3"+
		"\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2"+
		"\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2"+
		"/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2"+
		"\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2"+
		"G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3"+
		"\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\3g\3\2\2"+
		"\2\5i\3\2\2\2\7n\3\2\2\2\tt\3\2\2\2\13x\3\2\2\2\rz\3\2\2\2\17|\3\2\2\2"+
		"\21\177\3\2\2\2\23\u0081\3\2\2\2\25\u0084\3\2\2\2\27\u0089\3\2\2\2\31"+
		"\u008e\3\2\2\2\33\u0092\3\2\2\2\35\u0095\3\2\2\2\37\u009b\3\2\2\2!\u00a0"+
		"\3\2\2\2#\u00a3\3\2\2\2%\u00a6\3\2\2\2\'\u00a8\3\2\2\2)\u00ac\3\2\2\2"+
		"+\u00ae\3\2\2\2-\u00b0\3\2\2\2/\u00b2\3\2\2\2\61\u00b4\3\2\2\2\63\u00b6"+
		"\3\2\2\2\65\u00b8\3\2\2\2\67\u00bb\3\2\2\29\u00bd\3\2\2\2;\u00c0\3\2\2"+
		"\2=\u00c2\3\2\2\2?\u00c6\3\2\2\2A\u00c9\3\2\2\2C\u00cd\3\2\2\2E\u00cf"+
		"\3\2\2\2G\u00d4\3\2\2\2I\u00d8\3\2\2\2K\u00db\3\2\2\2M\u00dd\3\2\2\2O"+
		"\u00df\3\2\2\2Q\u00e1\3\2\2\2S\u00e3\3\2\2\2U\u00e5\3\2\2\2W\u00e7\3\2"+
		"\2\2Y\u00ea\3\2\2\2[\u00f2\3\2\2\2]\u00f4\3\2\2\2_h\7\62\2\2`d\4\63;\2"+
		"ac\4\62;\2ba\3\2\2\2cf\3\2\2\2db\3\2\2\2de\3\2\2\2eh\3\2\2\2fd\3\2\2\2"+
		"g_\3\2\2\2g`\3\2\2\2h\4\3\2\2\2ij\7v\2\2jk\7t\2\2kl\7w\2\2lm\7g\2\2m\6"+
		"\3\2\2\2no\7h\2\2op\7c\2\2pq\7n\2\2qr\7u\2\2rs\7g\2\2s\b\3\2\2\2tu\7p"+
		"\2\2uv\7k\2\2vw\7n\2\2w\n\3\2\2\2xy\7^\2\2y\f\3\2\2\2z{\7\60\2\2{\16\3"+
		"\2\2\2|}\7<\2\2}~\7<\2\2~\20\3\2\2\2\177\u0080\7<\2\2\u0080\22\3\2\2\2"+
		"\u0081\u0082\7k\2\2\u0082\u0083\7h\2\2\u0083\24\3\2\2\2\u0084\u0085\7"+
		"v\2\2\u0085\u0086\7j\2\2\u0086\u0087\7g\2\2\u0087\u0088\7p\2\2\u0088\26"+
		"\3\2\2\2\u0089\u008a\7g\2\2\u008a\u008b\7n\2\2\u008b\u008c\7u\2\2\u008c"+
		"\u008d\7g\2\2\u008d\30\3\2\2\2\u008e\u008f\7n\2\2\u008f\u0090\7g\2\2\u0090"+
		"\u0091\7v\2\2\u0091\32\3\2\2\2\u0092\u0093\7k\2\2\u0093\u0094\7p\2\2\u0094"+
		"\34\3\2\2\2\u0095\u0096\7w\2\2\u0096\u0097\7u\2\2\u0097\u0098\7k\2\2\u0098"+
		"\u0099\7p\2\2\u0099\u009a\7i\2\2\u009a\36\3\2\2\2\u009b\u009c\7e\2\2\u009c"+
		"\u009d\7c\2\2\u009d\u009e\7u\2\2\u009e\u009f\7g\2\2\u009f \3\2\2\2\u00a0"+
		"\u00a1\7q\2\2\u00a1\u00a2\7h\2\2\u00a2\"\3\2\2\2\u00a3\u00a4\7?\2\2\u00a4"+
		"\u00a5\7@\2\2\u00a5$\3\2\2\2\u00a6\u00a7\7~\2\2\u00a7&\3\2\2\2\u00a8\u00a9"+
		"\7h\2\2\u00a9\u00aa\7k\2\2\u00aa\u00ab\7z\2\2\u00ab(\3\2\2\2\u00ac\u00ad"+
		"\7-\2\2\u00ad*\3\2\2\2\u00ae\u00af\7/\2\2\u00af,\3\2\2\2\u00b0\u00b1\7"+
		",\2\2\u00b1.\3\2\2\2\u00b2\u00b3\7\61\2\2\u00b3\60\3\2\2\2\u00b4\u00b5"+
		"\7\'\2\2\u00b5\62\3\2\2\2\u00b6\u00b7\7>\2\2\u00b7\64\3\2\2\2\u00b8\u00b9"+
		"\7>\2\2\u00b9\u00ba\7?\2\2\u00ba\66\3\2\2\2\u00bb\u00bc\7@\2\2\u00bc8"+
		"\3\2\2\2\u00bd\u00be\7@\2\2\u00be\u00bf\7?\2\2\u00bf:\3\2\2\2\u00c0\u00c1"+
		"\7?\2\2\u00c1<\3\2\2\2\u00c2\u00c3\7c\2\2\u00c3\u00c4\7p\2\2\u00c4\u00c5"+
		"\7f\2\2\u00c5>\3\2\2\2\u00c6\u00c7\7q\2\2\u00c7\u00c8\7t\2\2\u00c8@\3"+
		"\2\2\2\u00c9\u00ca\7p\2\2\u00ca\u00cb\7q\2\2\u00cb\u00cc\7v\2\2\u00cc"+
		"B\3\2\2\2\u00cd\u00ce\7\u0080\2\2\u00ceD\3\2\2\2\u00cf\u00d0\7D\2\2\u00d0"+
		"\u00d1\7q\2\2\u00d1\u00d2\7q\2\2\u00d2\u00d3\7n\2\2\u00d3F\3\2\2\2\u00d4"+
		"\u00d5\7K\2\2\u00d5\u00d6\7p\2\2\u00d6\u00d7\7v\2\2\u00d7H\3\2\2\2\u00d8"+
		"\u00d9\7/\2\2\u00d9\u00da\7@\2\2\u00daJ\3\2\2\2\u00db\u00dc\7*\2\2\u00dc"+
		"L\3\2\2\2\u00dd\u00de\7+\2\2\u00deN\3\2\2\2\u00df\u00e0\7]\2\2\u00e0P"+
		"\3\2\2\2\u00e1\u00e2\7_\2\2\u00e2R\3\2\2\2\u00e3\u00e4\7}\2\2\u00e4T\3"+
		"\2\2\2\u00e5\u00e6\7\177\2\2\u00e6V\3\2\2\2\u00e7\u00e8\7.\2\2\u00e8X"+
		"\3\2\2\2\u00e9\u00eb\t\2\2\2\u00ea\u00e9\3\2\2\2\u00eb\u00ef\3\2\2\2\u00ec"+
		"\u00ee\t\3\2\2\u00ed\u00ec\3\2\2\2\u00ee\u00f1\3\2\2\2\u00ef\u00ed\3\2"+
		"\2\2\u00ef\u00f0\3\2\2\2\u00f0Z\3\2\2\2\u00f1\u00ef\3\2\2\2\u00f2\u00f3"+
		"\7\"\2\2\u00f3\\\3\2\2\2\u00f4\u00f5\t\4\2\2\u00f5\u00f6\3\2\2\2\u00f6"+
		"\u00f7\b/\2\2\u00f7^\3\2\2\2\b\2dg\u00ea\u00ed\u00ef\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}